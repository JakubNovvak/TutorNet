import { IconButton, styled } from '@mui/material';
import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material';

const Arrow = styled("div")({
    "& .next": {
      position: "absolute",
      top: "50%",
      color: "black",
      right: "5%",
      zIndex: "10",
    },
    "& .prev": {
      position: "absolute",
      top: "50%",
      color: "black",
      left: "5%",
      zIndex: "10",
    },
  });

export function SampleNextArrow({ onClick }: {onClick? : React.MouseEventHandler}): JSX.Element {
    return(
        <Arrow onClick={onClick}>
        <IconButton className="next">
            <ArrowForwardIos />
        </IconButton>
        </Arrow>
    );
}

export function SamplePrevArrow({ onClick }: {onClick? : React.MouseEventHandler}): JSX.Element {
    return(
        <Arrow onClick={onClick}>
            <IconButton className="prev">
                <ArrowBackIos />
            </IconButton>
        </Arrow>
    );
}
