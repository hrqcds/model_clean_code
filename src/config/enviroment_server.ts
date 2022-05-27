export default function ServeConfig() {
  const port = process.env.SERVE_PORT || 5000;

  return { port };
}
