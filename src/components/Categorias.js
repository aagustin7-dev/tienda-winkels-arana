import React from 'react';
import {Grid} from "@mui/material";
import {Link} from "react-router-dom";

const Categorias = ({ id, nombre }) => {

    return(
        <>
            <Grid style={{ background: '#2E3B55' }} item xs={12} md={4} >
              <Link to={"/" + nombre + "/" + id} style={{ textDecoration: 'none', color: 'white' }}>
                  {nombre}
              </Link>
            </Grid>

        </>
    );

}
export default Categorias;