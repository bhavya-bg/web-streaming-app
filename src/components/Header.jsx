import { AppBar, Toolbar, Typography, InputBase } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(1), width: 'auto' },
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  color: 'inherit',
}));

export default function Header({ onSearch }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
          StreamLite
        </Typography>
        <Search>
          <SearchInput
            placeholder="Search…"
            onKeyDown={(e) => {
              if (e.key === 'Enter') onSearch(e.target.value);
            }}
          />
        </Search>
      </Toolbar>
    </AppBar>
  );
}
