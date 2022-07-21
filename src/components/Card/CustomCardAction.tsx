import styled from '@emotion/styled';
import { CardActionArea } from '@mui/material';

const StyledCardActionArea = styled(CardActionArea)(({theme}) => `
    .MuiCardActionArea-focusHighlight {
        background: transparent;
    }
`);
export default StyledCardActionArea