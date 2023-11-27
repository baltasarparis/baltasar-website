import { Tooltip } from "evergreen-ui";

interface MyComponentProps {
    // Define your prop types here
    scroll: number;
    threshold: number[];
}

const ProgressBar: React.FC<MyComponentProps> = (props) => {
    const menu = [{
        'key': 'accueil',
        'label': 'Accueil'
    },
    {
        'key': 'approche',
        'label': 'Approche'
    },
    {
        'key': 'services',
        'label': 'Métiers'
    },
    {
        'key': 'equipe',
        'label': 'Equipe'
    }
    ]
    return (
        <div style={{ position: "fixed", top: '45%', left: 15 }}>
            {props.threshold.map((item, index) => {
                return (
                    <Tooltip key={index} content={
                        <div style={{ color: 'white' }}>
                            <a href={'#' + menu[index].key}>
                                {menu[index].label}
                            </a>
                        </div>} position="right">
                        <div key={index} className={(props.scroll > (item - 400)) ? 'progressBullet' : 'progressBulletActive'}>
                        </div>
                    </Tooltip>
                )
            })

            }
        </div>
    )
}

export default ProgressBar;