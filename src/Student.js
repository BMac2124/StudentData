import Score from "./Score"
const Student =(props) => {
    const scoreList = props.peeps.scores.map((score)=> <Score points={score}/>)
    return (
        <div>
            <div>name:{props.peeps.name} </div>
           <div>bio: {props.peeps.bio}</div>
           {scoreList} 
        </div>
    )
}

export default Student

