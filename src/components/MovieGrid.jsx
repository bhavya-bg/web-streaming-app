import { Grid, Card, CardMedia, CardContent, Typography  } from "@mui/material";

export default function MovieGrid({ movies }) {
  return (
    <Grid container spacing={2}>
      {movies.map((movie) => (
        <Grid key={movie.id}>
          <Card sx={{ maxWidth: 200 }}>
            <CardMedia
              component="img"
              height="300"
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <CardContent>
              <Typography variant="subtitle1" noWrap>{movie.title}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
