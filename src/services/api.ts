import { Article, ToolItem, OpportunityItem, CategoryType } from '../types';
import { ARTICLES_DATA, TOOLS_DATA, OPPORTUNITIES_DATA } from '../data/mockContent';

// Interface simulating Laravel Eloquent API responses
export interface ApiResponse<T> {
  data: T;
  meta?: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
  success: boolean;
  message?: string;
}

const STORAGE_KEY_ARTICLES = 'renda_mz_articles_v1';
const STORAGE_KEY_BOOKMARKS = 'renda_mz_bookmarks_v1';
const STORAGE_KEY_DATA_SAVER = 'renda_mz_data_saver_v1';
const STORAGE_KEY_API_ENDPOINT = 'renda_mz_custom_api_url';

class ContentApiService {
  private customApiUrl: string | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.customApiUrl = localStorage.getItem(STORAGE_KEY_API_ENDPOINT);
    }
  }

  // Get all articles (from Laravel API if configured, else from local cached repository)
  public async getArticles(category?: CategoryType | 'all', search?: string): Promise<Article[]> {
    let articles: Article[] = [];

    // Check if custom Laravel backend URL is set
    if (this.customApiUrl) {
      try {
        const queryParams = new URLSearchParams();
        if (category && category !== 'all') queryParams.append('category', category);
        if (search) queryParams.append('q', search);

        const res = await fetch(`${this.customApiUrl}/api/v1/articles?${queryParams.toString()}`);
        if (res.ok) {
          const json: ApiResponse<Article[]> = await res.json();
          if (json.data && Array.isArray(json.data)) {
            return json.data;
          }
        }
      } catch (err) {
        console.warn('API Remota indisponível, usando repositório local otimizado:', err);
      }
    }

    // Local cached source
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY_ARTICLES);
      if (stored) {
        try {
          articles = JSON.parse(stored);
        } catch {
          articles = [...ARTICLES_DATA];
        }
      } else {
        articles = [...ARTICLES_DATA];
        localStorage.setItem(STORAGE_KEY_ARTICLES, JSON.stringify(articles));
      }
    } else {
      articles = [...ARTICLES_DATA];
    }

    // Apply filtering
    if (category && category !== 'all') {
      articles = articles.filter(a => a.category === category);
    }

    if (search && search.trim() !== '') {
      const q = search.toLowerCase();
      articles = articles.filter(
        a =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.requirements.some(r => r.toLowerCase().includes(q))
      );
    }

    return articles;
  }

  public async getArticleBySlug(slug: string): Promise<Article | undefined> {
    const list = await this.getArticles();
    return list.find(a => a.slug === slug || a.id === slug);
  }

  public async getTools(): Promise<ToolItem[]> {
    return TOOLS_DATA;
  }

  public async getOpportunities(): Promise<OpportunityItem[]> {
    return OPPORTUNITIES_DATA;
  }

  // Bookmarks support (Saved for offline reading without consuming mobile data)
  public getBookmarks(): string[] {
    if (typeof window === 'undefined') return [];
    try {
      const item = localStorage.getItem(STORAGE_KEY_BOOKMARKS);
      return item ? JSON.parse(item) : [];
    } catch {
      return [];
    }
  }

  public toggleBookmark(articleId: string): boolean {
    if (typeof window === 'undefined') return false;
    const current = this.getBookmarks();
    let updated: string[];
    let isSaved = false;
    if (current.includes(articleId)) {
      updated = current.filter(id => id !== articleId);
      isSaved = false;
    } else {
      updated = [...current, articleId];
      isSaved = true;
    }
    localStorage.setItem(STORAGE_KEY_BOOKMARKS, JSON.stringify(updated));
    return isSaved;
  }

  // Data saver mode
  public isDataSaverEnabled(): boolean {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem(STORAGE_KEY_DATA_SAVER) === 'true';
  }

  public setDataSaverEnabled(enabled: boolean): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY_DATA_SAVER, enabled ? 'true' : 'false');
  }

  // API configuration for future Laravel integration
  public setApiEndpoint(url: string | null): void {
    if (typeof window === 'undefined') return;
    if (url) {
      localStorage.setItem(STORAGE_KEY_API_ENDPOINT, url);
      this.customApiUrl = url;
    } else {
      localStorage.removeItem(STORAGE_KEY_API_ENDPOINT);
      this.customApiUrl = null;
    }
  }

  public getApiEndpoint(): string | null {
    return this.customApiUrl;
  }

  // Laravel & MySQL Blueprint Code Generator for easy export
  public generateLaravelBlueprints(): { migration: string; seeder: string; controller: string } {
    const migration = `<?php
// database/migrations/2026_01_01_000000_create_renda_digital_tables.php
use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('title');
            $table->string('category');
            $table->string('category_name');
            $table->text('excerpt');
            $table->json('content');
            $table->string('read_time')->default('5 min');
            $table->string('image')->nullable();
            $table->enum('difficulty', ['Iniciante', 'Intermediário', 'Avançado'])->default('Iniciante');
            $table->string('estimated_income')->nullable();
            $table->string('startup_cost')->nullable();
            $table->enum('risk_level', ['Muito Baixo', 'Baixo', 'Moderado'])->default('Baixo');
            $table->json('requirements')->nullable();
            $table->json('payout_methods')->nullable();
            $table->json('steps')->nullable();
            $table->json('cautions')->nullable();
            $table->boolean('is_featured')->default(false);
            $table->timestamps();
        });

        Schema::create('tools', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('category');
            $table->text('description');
            $table->string('pricing');
            $table->string('url');
            $table->boolean('mobile_friendly')->default(true);
            $table->boolean('popular_in_mz')->default(true);
            $table->json('highlights')->nullable();
            $table->timestamps();
        });

        Schema::create('opportunities', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('organization');
            $table->string('type');
            $table->string('deadline');
            $table->string('location');
            $table->string('compensation');
            $table->string('url');
            $table->boolean('verified')->default(true);
            $table->text('description');
            $table->json('requirements')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('opportunities');
        Schema::dropIfExists('tools');
        Schema::dropIfExists('articles');
    }
};`;

    const seeder = `<?php
// database/seeders/RendaDigitalSeeder.php
namespace Database\\Seeders;

use Illuminate\\Database\\Seeder;
use Illuminate\\Support\\Facades\\DB;

class RendaDigitalSeeder extends Seeder {
    public function run(): void {
        // Import articles directly from seed data
        $articles = json_decode('${JSON.stringify(ARTICLES_DATA.map(a => ({
          slug: a.slug,
          title: a.title,
          category: a.category,
          category_name: a.categoryName,
          excerpt: a.excerpt,
          read_time: a.readTime,
          difficulty: a.difficulty,
          estimated_income: a.estimatedIncome,
          startup_cost: a.startupCost,
          risk_level: a.riskLevel,
          is_featured: a.isFeatured ? 1 : 0,
          content: JSON.stringify(a.content),
          requirements: JSON.stringify(a.requirements),
          payout_methods: JSON.stringify(a.payoutMethods),
          created_at: '2026-10-01 10:00:00',
          updated_at: '2026-10-01 10:00:00',
        }))).replace(/'/g, "\\'")}', true);

        foreach ($articles as $art) {
            DB::table('articles')->updateOrInsert(['slug' => $art['slug']], $art);
        }
    }
}`;

    const controller = `<?php
// app/Http/Controllers/Api/ArticleController.php
namespace App\\Http\\Controllers\\Api;

use App\\Http\\Controllers\\Controller;
use App\\Models\\Article;
use Illuminate\\Http\\Request;
use Illuminate\\Http\\JsonResponse;

class ArticleController extends Controller {
    public function index(Request $request): JsonResponse {
        $query = Article::query();

        if ($request->has('category') && $request->category !== 'all') {
            $query->where('category', $request->category);
        }

        if ($request->has('q')) {
            $term = $request->q;
            $query->where(function($q) use ($term) {
                $q->where('title', 'like', "%{$term}%")
                  ->orWhere('excerpt', 'like', "%{$term}%");
            });
        }

        $articles = $query->latest()->get();

        return response()->json([
            'success' => true,
            'data' => $articles
        ]);
    }
}`;

    return { migration, seeder, controller };
  }
}

export const contentService = new ContentApiService();
