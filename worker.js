
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Backend health check
    if (url.pathname === "/api/health") {
      return Response.json({
        success: true,
        app: env.APP_NAME || "ViralDil",
        message: "ViralDil Worker is running"
      });
    }

    // Serve website files
    return env.ASSETS.fetch(request);
  }
};
