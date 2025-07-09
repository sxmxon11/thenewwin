import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Calendar,
  Cloud,
  Sun,
  CloudRain,
  Wind,
  Wifi,
  Battery,
  Volume2,
  Bluetooth,
  Search,
  Folder,
  Mail,
  MessageCircle,
  Camera,
  Music,
  Settings,
  Calculator,
  Clock,
  CheckSquare,
  Play,
  SkipBack,
  SkipForward,
  Pause,
  Moon,
  Palette,
  X,
  Power,
  User,
  FileText,
  Image,
  Video,
  Download,
} from "lucide-react";

// Start Menu Component
function StartMenu({
  isOpen,
  onClose,
  onAppClick,
}: {
  isOpen: boolean;
  onClose: () => void;
  onAppClick: (appName: string) => void;
}) {
  const apps = [
    { name: "Finder", icon: Folder, color: "text-blue-400" },
    { name: "Webcam", icon: Camera, color: "text-green-500" },
    { name: "Clock", icon: Clock, color: "text-white" },
    { name: "Settings", icon: Settings, color: "text-gray-400" },
    { name: "Calculator", icon: Calculator, color: "text-orange-500" },
    { name: "Files", icon: FileText, color: "text-blue-300" },
    { name: "Photos", icon: Image, color: "text-purple-400" },
    { name: "Videos", icon: Video, color: "text-red-400" },
  ];

  const quickActions = [
    { name: "Documents", icon: FileText, color: "text-blue-300" },
    { name: "Downloads", icon: Download, color: "text-green-400" },
    { name: "Pictures", icon: Image, color: "text-purple-400" },
    { name: "Music", icon: Music, color: "text-red-400" },
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-45" onClick={onClose} />

      {/* Start Menu */}
      <div className="fixed bottom-16 left-4 z-50 w-80 h-96">
        <div className="glass text-white border-white/20 rounded-lg shadow-2xl h-full flex flex-col">
          {/* User Section */}
          <div className="p-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500/80 rounded-full flex items-center justify-center">
                <User className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-medium">User</div>
                <div className="text-xs opacity-70">SSeven User</div>
              </div>
            </div>
          </div>

          {/* Apps Grid */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="mb-4">
              <h3 className="text-xs font-medium opacity-80 mb-2">Apps</h3>
              <div className="grid grid-cols-4 gap-2">
                {apps.map((app) => (
                  <button
                    key={app.name}
                    onClick={() => {
                      onAppClick(app.name);
                      onClose();
                    }}
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors flex flex-col items-center gap-1"
                    title={app.name}
                  >
                    <app.icon className={`w-6 h-6 ${app.color}`} />
                    <span className="text-xs truncate w-full text-center">
                      {app.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-medium opacity-80 mb-2">
                Quick Access
              </h3>
              <div className="space-y-1">
                {quickActions.map((action) => (
                  <button
                    key={action.name}
                    className="w-full p-2 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-3 text-left"
                  >
                    <action.icon className={`w-4 h-4 ${action.color}`} />
                    <span className="text-sm">{action.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Power Options */}
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10 flex items-center gap-2"
              >
                <Power className="w-4 h-4" />
                <span className="text-sm">Power</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  onAppClick("Settings");
                  onClose();
                }}
                className="text-white hover:bg-white/10"
              >
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Weather Widget
function WeatherWidget() {
  return (
    <Card className="widget-glass text-white border-0 mb-4">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm opacity-80">San Francisco</span>
          <Sun className="w-6 h-6 text-yellow-300" />
        </div>
        <div className="text-2xl font-light mb-1">72°</div>
        <div className="text-xs opacity-80">Partly Cloudy</div>
        <div className="flex justify-between mt-3 text-xs">
          <div className="flex items-center space-x-1">
            <Wind className="w-3 h-3" />
            <span>8 mph</span>
          </div>
          <div className="flex items-center space-x-1">
            <CloudRain className="w-3 h-3" />
            <span>0%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Calendar Widget
function CalendarWidget() {
  const currentDate = new Date();
  const monthName = currentDate.toLocaleDateString([], { month: "long" });
  const year = currentDate.getFullYear();
  const today = currentDate.getDate();

  // Generate calendar days (simplified)
  const daysInMonth = new Date(year, currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, currentDate.getMonth(), 1).getDay();

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return (
    <Card className="widget-glass text-white border-0 mb-4">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <Calendar className="w-5 h-5" />
          <span className="text-sm font-medium">
            {monthName} {year}
          </span>
        </div>
        <div className="grid grid-cols-7 gap-1 text-xs">
          {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
            <div
              key={`header-${index}-${day}`}
              className="text-center py-1 opacity-60 font-medium"
            >
              {day}
            </div>
          ))}
          {days.map((day, index) => (
            <div
              key={`day-${index}-${day || "empty"}`}
              className={`text-center py-1 ${
                day === today
                  ? "bg-blue-500 rounded-full"
                  : day
                    ? "hover:bg-white/10 rounded"
                    : ""
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Reminders Widget
function RemindersWidget() {
  const reminders = [
    { id: 1, text: "Meeting with design team", completed: false },
    { id: 2, text: "Review project proposal", completed: true },
    { id: 3, text: "Call client about feedback", completed: false },
  ];

  return (
    <Card className="widget-glass text-white border-0 mb-4">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <CheckSquare className="w-5 h-5" />
          <span className="text-sm font-medium">Reminders</span>
        </div>
        <div className="space-y-2">
          {reminders.map((reminder) => (
            <div key={reminder.id} className="flex items-center space-x-2">
              <div
                className={`w-3 h-3 rounded-full border ${
                  reminder.completed
                    ? "bg-green-500 border-green-500"
                    : "border-white/40"
                }`}
              />
              <span
                className={`text-xs ${
                  reminder.completed ? "line-through opacity-60" : ""
                }`}
              >
                {reminder.text}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Podcast Widget
function PodcastWidget() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Card className="widget-glass text-white border-0">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <Music className="w-5 h-5" />
          <span className="text-sm font-medium">Now Playing</span>
        </div>
        <div className="mb-3">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-2 flex items-center justify-center">
            <Music className="w-6 h-6" />
          </div>
          <div className="text-sm font-medium mb-1">The Daily</div>
          <div className="text-xs opacity-80">The New York Times</div>
        </div>
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 text-white hover:bg-white/10"
          >
            <SkipBack className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 text-white hover:bg-white/10"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 text-white hover:bg-white/10"
          >
            <SkipForward className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// Settings Modal Component
function SettingsModal({
  isOpen,
  onClose,
  isDarkMode,
  onThemeToggle,
  currentBg,
  onBgChange,
  customBackgrounds,
  onAddCustomBackground,
}: {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  onThemeToggle: () => void;
  currentBg: string;
  onBgChange: (bg: string) => void;
  customBackgrounds: Array<{ name: string; value: string; url: string }>;
  onAddCustomBackground: (bg: {
    name: string;
    value: string;
    url: string;
  }) => void;
}) {
  const standardImages = [
    {
      name: "Mountain Lake",
      value: "mountain-lake",
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&auto=format",
      isImage: true,
    },
    {
      name: "Forest Path",
      value: "forest-path",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=1080&fit=crop&auto=format",
      isImage: true,
    },
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const url = e.target?.result as string;
        const customBg = {
          name: file.name.split(".")[0],
          value: `custom-${Date.now()}`,
          url: url,
        };
        onAddCustomBackground(customBg);
        onBgChange(customBg.value);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass text-white border-white/20 max-w-lg max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            SSeven System Preferences
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Theme Toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {isDarkMode ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
              <span>Dark Mode</span>
            </div>
            <Switch checked={isDarkMode} onCheckedChange={onThemeToggle} />
          </div>

          {/* Background Selection */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Palette className="w-4 h-4" />
              <span>Desktop Background</span>
            </div>

            {/* File Upload */}
            <div className="mb-4">
              <label
                htmlFor="bg-upload"
                className="flex items-center justify-center w-full h-12 border-2 border-dashed border-white/30 rounded-lg hover:border-white/50 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-2 text-sm">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  Upload Custom Background
                </div>
              </label>
              <input
                id="bg-upload"
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>

            {/* Standard Images */}
            <div className="mb-4">
              <h4 className="text-sm font-medium mb-2 opacity-80">
                Background Images
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {standardImages.map((bg) => (
                  <button
                    key={bg.value}
                    onClick={() => onBgChange(bg.value)}
                    className={`relative h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      currentBg === bg.value
                        ? "border-white/60"
                        : "border-white/20 hover:border-white/40"
                    }`}
                  >
                    <img
                      src={bg.url}
                      alt={bg.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-1 left-1 text-xs font-medium text-white drop-shadow">
                      {bg.name}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Uploaded Images */}
            {customBackgrounds.length > 0 && (
              <div>
                <h4 className="text-sm font-medium mb-2 opacity-80">
                  Custom Images
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {customBackgrounds.map((bg) => (
                    <button
                      key={bg.value}
                      onClick={() => onBgChange(bg.value)}
                      className={`relative h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        currentBg === bg.value
                          ? "border-white/60"
                          : "border-white/20 hover:border-white/40"
                      }`}
                    >
                      <img
                        src={bg.url}
                        alt={bg.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute bottom-1 left-1 text-xs font-medium text-white drop-shadow">
                        {bg.name}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Simple App Modal for other apps
function AppModal({
  isOpen,
  onClose,
  appName,
  icon: Icon,
  color,
}: {
  isOpen: boolean;
  onClose: () => void;
  appName: string;
  icon: any;
  color: string;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass text-white border-white/20 max-w-sm">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Icon className={`w-5 h-5 ${color}`} />
            {appName}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6 text-center space-y-4">
          <Icon className={`w-16 h-16 mx-auto ${color}`} />
          <p className="text-white/80">
            {appName} is ready to use! This is a demo interface showcasing the
            SSeven operating system.
          </p>
          <Button
            onClick={onClose}
            className="bg-white/10 hover:bg-white/20 text-white border-white/20"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Windows-style Taskbar Component
function Taskbar({
  onAppClick,
  onStartMenuToggle,
}: {
  onAppClick: (appName: string) => void;
  onStartMenuToggle: () => void;
}) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const apps = [
    { name: "Finder", icon: Folder, color: "text-blue-400" },
    { name: "Webcam", icon: Camera, color: "text-green-500" },
    { name: "Clock", icon: Clock, color: "text-white" },
    { name: "Settings", icon: Settings, color: "text-gray-400" },
  ];

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString([], {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40">
      <div className="dock-glass border-t border-white/30 px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Left side - Start button and App icons */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={onStartMenuToggle}
              className="text-white hover:bg-white/10 px-2 py-1"
            >
              <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d524f23f-503e-4d1d-8ee0-96e655258add/dhb97lf-8e8dc359-c875-4892-90b5-db8a2aad39e5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q1MjRmMjNmLTUwM2UtNGQxZC04ZWUwLTk2ZTY1NTI1OGFkZFwvZGhiOTdsZi04ZThkYzM1OS1jODc1LTQ4OTItOTBiNS1kYjhhMmFhZDM5ZTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IDDiv2bGk0HXQamBvvRRHxMbWLL7ruAFl_AmpRUbgJM"
                alt="SSeven Logo"
                className="w-5 h-5 object-contain"
              />
            </Button>

            {/* Separator */}
            <div className="w-px h-6 bg-white/20 mx-1" />

            {/* App icons */}
            <div className="flex items-center space-x-1">
              {apps.map((app) => (
                <Button
                  key={app.name}
                  variant="ghost"
                  size="icon"
                  onClick={() => onAppClick(app.name)}
                  className="w-10 h-10 text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                  title={app.name}
                >
                  <app.icon className={`w-5 h-5 ${app.color}`} />
                </Button>
              ))}
            </div>
          </div>

          {/* Right side - System tray and time */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 text-white/80">
              <Wifi className="w-4 h-4" />
              <Volume2 className="w-4 h-4" />
              <Battery className="w-4 h-4" />
            </div>
            <div className="text-white text-sm text-right">
              <div className="font-medium">{formatTime(currentTime)}</div>
              <div className="text-xs opacity-80">
                {formatDate(currentTime)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Desktop Component
export default function Index() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentBg, setCurrentBg] = useState("mountain-lake");
  const [openApp, setOpenApp] = useState<string | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [customBackgrounds, setCustomBackgrounds] = useState<
    Array<{ name: string; value: string; url: string }>
  >([]);

  const standardImages = {
    "mountain-lake": {
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&auto=format",
      isImage: true,
    },
    "forest-path": {
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=1080&fit=crop&auto=format",
      isImage: true,
    },
  };

  const handleAppClick = (appName: string) => {
    if (appName === "Settings") {
      setSettingsOpen(true);
    } else {
      setOpenApp(appName);
    }
  };

  const handleAddCustomBackground = (bg: {
    name: string;
    value: string;
    url: string;
  }) => {
    setCustomBackgrounds((prev) => [...prev, bg]);
  };

  const getCurrentBackgroundStyle = () => {
    // Check if it's a standard image
    if (standardImages[currentBg as keyof typeof standardImages]) {
      return {
        backgroundImage: `url(${standardImages[currentBg as keyof typeof standardImages].url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      };
    }

    // Check if it's a custom uploaded image
    const customBg = customBackgrounds.find((bg) => bg.value === currentBg);
    if (customBg) {
      return {
        backgroundImage: `url(${customBg.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      };
    }

    // Default fallback to mountain lake
    return {
      backgroundImage: `url(${standardImages["mountain-lake"].url})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    };
  };

  const apps = [
    { name: "Finder", icon: Folder, color: "text-blue-400" },
    { name: "Webcam", icon: Camera, color: "text-green-500" },
    { name: "Clock", icon: Clock, color: "text-white" },
    { name: "Settings", icon: Settings, color: "text-gray-400" },
  ];

  const currentApp = apps.find((app) => app.name === openApp);

  return (
    <div
      className={`min-h-screen relative overflow-hidden ${isDarkMode ? "dark" : ""}`}
    >
      {/* Background with dynamic styling */}
      <div className="absolute inset-0" style={getCurrentBackgroundStyle()} />

      {/* Dark mode overlay */}
      {isDarkMode && <div className="absolute inset-0 bg-black/40" />}

      {/* Subtle reflection effect */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t ${isDarkMode ? "from-black/20" : "from-white/10"} to-transparent`}
      />

      {/* Floating shapes for depth */}
      <div
        className={`absolute top-1/4 left-1/4 w-32 h-32 ${isDarkMode ? "bg-white/3" : "bg-white/5"} rounded-full blur-xl`}
      />
      <div
        className={`absolute top-1/3 right-1/4 w-24 h-24 ${isDarkMode ? "bg-blue-300/5" : "bg-blue-300/10"} rounded-full blur-2xl`}
      />
      <div
        className={`absolute bottom-1/3 left-1/3 w-40 h-40 ${isDarkMode ? "bg-emerald-300/3" : "bg-emerald-300/5"} rounded-full blur-2xl`}
      />

      {/* Left Sidebar with Widgets */}
      <div className="fixed left-4 top-4 z-30 w-64 space-y-4">
        <WeatherWidget />
        <CalendarWidget />
        <RemindersWidget />
        <PodcastWidget />
      </div>

      {/* Main Content Area */}
      <div className="px-4 min-h-screen flex items-center justify-center pb-20">
        <div className="text-center text-white">
          <div className="space-y-6">
            <div className="text-8xl font-ultralight opacity-90">
              {new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
            </div>
            <div className="text-2xl opacity-70">
              {new Date().toLocaleDateString([], {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Windows-style Taskbar */}
      <Taskbar
        onAppClick={handleAppClick}
        onStartMenuToggle={() => setStartMenuOpen(!startMenuOpen)}
      />

      {/* Start Menu */}
      <StartMenu
        isOpen={startMenuOpen}
        onClose={() => setStartMenuOpen(false)}
        onAppClick={handleAppClick}
      />

      {/* Settings Modal */}
      <SettingsModal
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        isDarkMode={isDarkMode}
        onThemeToggle={() => setIsDarkMode(!isDarkMode)}
        currentBg={currentBg}
        onBgChange={setCurrentBg}
        customBackgrounds={customBackgrounds}
        onAddCustomBackground={handleAddCustomBackground}
      />

      {/* Generic App Modal */}
      {openApp && currentApp && (
        <AppModal
          isOpen={!!openApp}
          onClose={() => setOpenApp(null)}
          appName={currentApp.name}
          icon={currentApp.icon}
          color={currentApp.color}
        />
      )}
    </div>
  );
}
