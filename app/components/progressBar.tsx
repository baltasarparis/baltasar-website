import { Tooltip } from "evergreen-ui";

interface MyComponentProps {
    // Define your prop types here
    scroll: number;
    threshold: number[];
}

const ProgressBar: React.FC<MyComponentProps> = (props) => {
    const menu = ['accueil', 'approche', 'services', 'equipe']
    return (
        <div style={{ position: "fixed", top: '45%', left: 15 }}>
            {props.threshold.map((item, index) => {
                return (
                    <Tooltip content={
                        <div style={{ color: 'white' }}>
                            <a href={'#' + menu[index]}>
                                {menu[index]}
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