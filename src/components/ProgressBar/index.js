import Progress from 'react-progressbar'

const ProgressBar = ({percentage}) => {
    console.log('percentage', percentage)
    return (
        <div>
            <Progress completed={percentage} />
         </div>
    )
}

export default ProgressBar;