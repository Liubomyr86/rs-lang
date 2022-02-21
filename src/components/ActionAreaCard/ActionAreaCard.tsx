import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { StringDecoder } from 'string_decoder';

export interface TeamCard {
    image: string;
    about: string;
    name: string;
    git: string;
}

export const ActionAreaCard: React.FC<TeamCard> = (props: TeamCard) => {
    const {
        image, about, name, git,
    } = props;
    return (
        <Card sx={{ maxWidth: 150 }}>
            <CardActionArea>
                <CardMedia component="img" height="140" image={image} alt="photo" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <a href={git} target="_blank" rel="noreferrer">
                            <img src="/logo_git_violet.svg" alt="git-logo" className="git_logo_teams" />
                            {name}
                        </a>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {about}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
