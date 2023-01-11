var minTime = function(n, edges, hasApple) {
    const adj = {}
    for (let i = 0; i < n; i++) {
        adj[i] = [];
    }

    for (let i = 0; i < edges.length; i++) {
        [par, child] = edges[i];
        adj[par].push(child);
        adj[child].push(par);
    }

   function dfs(curr, par) {
        let time = 0;
        for (let nei of adj[curr]) {
            if (nei === par) continue;
            let childTime = dfs(nei, curr);
            if (childTime || hasApple[nei]) {
                time += 2 + childTime;
            }
        }
        return time;
   }

   return dfs(0, -1);
};