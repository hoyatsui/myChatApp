// ----------------------------------------------------------------------

// combine the rootand sublink. "/" + "app" => /app

function path(root, sublink) {
  return `${root}${sublink}`;
}

// It is easy to change all the root paths in the project when maintaining the application.
// When writing code, we can use the property of an object instead of a string, which can avoid typos and allows us to use code hints.
// Readable.
const ROOTS_DASHBOARD = "/";

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    app: path(ROOTS_DASHBOARD, "app"),
  },
};
