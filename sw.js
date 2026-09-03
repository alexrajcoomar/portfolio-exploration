// Not the site's worker. This copy shares an origin with the live site,
// whose worker is scoped to / and would otherwise serve these pages from
// its own cache. This one claims /portfolio-exploration/ so the copy is
// always read from the network. It has no fetch handler, so it caches
// nothing and deletes nothing. Not on the branch: added when this copy
// was published, in place of the site worker the branch ships.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
