export default function ProgressBar(props) {
    return (
        <div style={{ position: "fixed", top: '45%', left: 15 }}>
            {props.threshold.map((item, index) => {
                return (
                    <div className={(props.scroll > (item - 400)) ? 'progressBullet' : 'progressBulletActive'}>
                    </div>
                )
            })

            }
        </div>
    )
}