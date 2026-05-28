import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import Exhibit from "./pages/Exhibit";
import SmartExhibition from "./pages/SmartExhibition";
import News from "./pages/News";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

function withBasePath(path: string) {
  return `${basePath}${path === "/" ? "" : path}` || "/";
}

function Router() {
  return (
    <Switch>
      <Route path={withBasePath("/")} component={Home} />
      <Route path={withBasePath("/overview")} component={Overview} />
      <Route path={withBasePath("/exhibit")} component={Exhibit} />
      <Route path={withBasePath("/smart-exhibition")} component={SmartExhibition} />
      <Route path={withBasePath("/news")} component={News} />
      <Route path={withBasePath("/404")} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
