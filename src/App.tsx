import React from "react";
import Grid from "@material-ui/core/Grid";
import { Catalog } from "./components";

function CatalogApp() {
  return (
    <Grid container>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => (
        <Grid key={e} item md={3}>
          <Catalog />
        </Grid>
      ))}
    </Grid>
  );
}

export { CatalogApp };
