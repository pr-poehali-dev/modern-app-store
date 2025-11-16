import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface App {
  id: number;
  name: string;
  category: string;
  rating: number;
  downloads: string;
  size: string;
  icon: string;
  description: string;
  images: string[];
  developer: string;
}

const apps: App[] = [
  {
    id: 1,
    name: "Cyber Racing",
    category: "Гонки",
    rating: 4.8,
    downloads: "10M+",
    size: "850 MB",
    icon: "https://cdn.poehali.dev/projects/5d277242-31d3-4715-897e-ef0a6f1ed6f4/files/e6f295e8-1fa0-4ba4-a3a5-d7b36b67b736.jpg",
    description: "Футуристичные гонки в неоновом городе",
    images: ["/placeholder.svg"],
    developer: "Speed Games"
  },
  {
    id: 2,
    name: "Space Odyssey",
    category: "Приключения",
    rating: 4.9,
    downloads: "25M+",
    size: "1.2 GB",
    icon: "🚀",
    description: "Исследуй бескрайний космос",
    images: ["/placeholder.svg"],
    developer: "Galaxy Studios"
  },
  {
    id: 3,
    name: "Battle Arena",
    category: "Экшен",
    rating: 4.7,
    downloads: "50M+",
    size: "950 MB",
    icon: "⚔️",
    description: "Многопользовательские PvP сражения",
    images: ["/placeholder.svg"],
    developer: "War Games Inc"
  },
  {
    id: 4,
    name: "Puzzle Master",
    category: "Головоломки",
    rating: 4.6,
    downloads: "15M+",
    size: "120 MB",
    icon: "🧩",
    description: "Сотни увлекательных головоломок",
    images: ["/placeholder.svg"],
    developer: "Brain Games"
  },
  {
    id: 5,
    name: "Fantasy Quest",
    category: "РПГ",
    rating: 4.9,
    downloads: "30M+",
    size: "1.5 GB",
    icon: "https://cdn.poehali.dev/projects/5d277242-31d3-4715-897e-ef0a6f1ed6f4/files/9b90de66-03b7-445a-9e90-1a40128e94c5.jpg",
    description: "Эпическое фэнтези приключение",
    images: ["/placeholder.svg"],
    developer: "Epic RPG Studios"
  },
  {
    id: 6,
    name: "City Builder",
    category: "Стратегии",
    rating: 4.5,
    downloads: "20M+",
    size: "600 MB",
    icon: "🏙️",
    description: "Построй город своей мечты",
    images: ["/placeholder.svg"],
    developer: "SimCity Games"
  },
  {
    id: 7,
    name: "Zombie Survival",
    category: "Хоррор",
    rating: 4.7,
    downloads: "18M+",
    size: "1.1 GB",
    icon: "🧟",
    description: "Выживай в мире зомби",
    images: ["/placeholder.svg"],
    developer: "Horror Games Co"
  },
  {
    id: 8,
    name: "Soccer Stars",
    category: "Спорт",
    rating: 4.8,
    downloads: "40M+",
    size: "750 MB",
    icon: "⚽",
    description: "Лучший футбольный симулятор",
    images: ["/placeholder.svg"],
    developer: "Sports Gaming"
  }
];

const categories = ["Все", "Гонки", "Приключения", "Экшен", "Головоломки", "РПГ", "Стратегии", "Хоррор", "Спорт"];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedApp, setSelectedApp] = useState<App | null>(null);

  const filteredApps = apps.filter(app => {
    const matchesCategory = selectedCategory === "Все" || app.category === selectedCategory;
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const topApps = apps.filter(app => app.rating >= 4.8).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <header className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl">
                🎮
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                App Store
              </h1>
            </div>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Icon name="User" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Icon name="Settings" size={20} />
              </Button>
            </div>
          </div>

          <div className="relative">
            <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Поиск игр и приложений..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg bg-card border-border rounded-2xl"
            />
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Icon name="TrendingUp" size={24} className="text-primary" />
            Топ приложений
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topApps.map((app, index) => (
              <Card 
                key={app.id}
                className="group relative overflow-hidden bg-gradient-to-br from-card to-muted border-border hover:border-primary transition-all duration-300 cursor-pointer hover:scale-105"
                onClick={() => setSelectedApp(app)}
              >
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg">
                  #{index + 1}
                </div>
                <div className="p-6 pt-16">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-4xl shrink-0 overflow-hidden">
                      {app.icon.startsWith('http') ? (
                        <img src={app.icon} alt={app.name} className="w-full h-full object-cover" />
                      ) : (
                        <span>{app.icon}</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-xl mb-1 truncate">{app.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{app.developer}</p>
                      <div className="flex items-center gap-1 mb-2">
                        <Icon name="Star" size={16} className="text-amber-500 fill-amber-500" />
                        <span className="font-semibold">{app.rating}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{app.description}</p>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Установить
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
            <TabsList className="bg-card border border-border p-1 h-auto flex-wrap justify-start gap-2">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredApps.map((app) => (
              <Card 
                key={app.id}
                className="group overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 cursor-pointer hover:scale-105"
                onClick={() => setSelectedApp(app)}
              >
                <div className="p-5">
                  <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-6xl mb-4 overflow-hidden">
                    {app.icon.startsWith('http') ? (
                      <img src={app.icon} alt={app.name} className="w-full h-full object-cover" />
                    ) : (
                      <span>{app.icon}</span>
                    )}
                  </div>
                  <div className="mb-3">
                    <h3 className="font-bold text-lg mb-1 truncate">{app.name}</h3>
                    <p className="text-xs text-muted-foreground">{app.developer}</p>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={14} className="text-amber-500 fill-amber-500" />
                      <span className="text-sm font-semibold">{app.rating}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {app.category}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Icon name="Download" size={12} />
                      <span>{app.downloads}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="HardDrive" size={12} />
                      <span>{app.size}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90" size="sm">
                    Установить
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {filteredApps.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Icon name="SearchX" size={40} className="text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ничего не найдено</h3>
              <p className="text-muted-foreground">Попробуйте изменить параметры поиска</p>
            </div>
          )}
        </section>
      </div>

      {selectedApp && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedApp(null)}
        >
          <Card 
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-5xl shrink-0 overflow-hidden">
                  {selectedApp.icon.startsWith('http') ? (
                    <img src={selectedApp.icon} alt={selectedApp.name} className="w-full h-full object-cover" />
                  ) : (
                    <span>{selectedApp.icon}</span>
                  )}
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-2">{selectedApp.name}</h2>
                  <p className="text-muted-foreground mb-3">{selectedApp.developer}</p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={18} className="text-amber-500 fill-amber-500" />
                      <span className="font-semibold text-lg">{selectedApp.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Icon name="Download" size={16} />
                      <span>{selectedApp.downloads}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Icon name="HardDrive" size={16} />
                      <span>{selectedApp.size}</span>
                    </div>
                  </div>
                  <Badge className="mb-4">{selectedApp.category}</Badge>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                  onClick={() => setSelectedApp(null)}
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-3">Описание</h3>
                <p className="text-muted-foreground leading-relaxed">{selectedApp.description}</p>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 h-12 text-lg">
                  <Icon name="Download" size={20} className="mr-2" />
                  Установить
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12">
                  <Icon name="Share2" size={20} />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Index;