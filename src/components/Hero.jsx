export default function Hero(){
    
    /**Any singular react component can only return one parent level tag or subsequent component*/
    return (
        <>
            <h5>Complete this training program if you want to ...</h5>
            <ol className="benefits-list">
                <li>Follow a simple planner with guaranteed results</li>
                <li>Get fit, healthy, strong and shredded</li>
                <li>Learn more about gym, training and technique</li>
                <li>Become an absolute beast ❤️‍🔥</li>
            </ol>
            <h3>The Rules</h3>
            <p>
                To Complete this program, you 
                <b> MUST </b> 
                follow these 3 simple rules:
            </p>
            <ul className="rules-list">
                <div className="rule-item">
                    <p><b>Rest</b></p>
                    <p>Ensure that you are taking rest days where necessary</p>
                </div>
                <div className="rule-item">
                    <p><b>Reps</b></p>
                    <p>Every rep is a pause rep following a <abbr title="2 seconds down - 2 seconds pause - 2 seconds up">2 - 2 - 2 tempo</abbr></p>
                </div>
                <div className="rule-item">
                    <p><b>Weight*</b></p>
                    <p>Select the maximum weight that allows you to complete the set with good form</p>
                </div>
            </ul>
            <small>* The first and second set should be at 75% and 85% of your working weight used for the last 2 sets.</small>
            <h3>The Training Plan</h3>
            <p>This training plan follows this rotation ⬇️</p>
            <p><b><i>Push &rarr; Pull &rarr; Legs &rarr; Repeat</i></b></p>
            <p>Complete all of your workouts below and track your progress along the way ✅</p>
        </>
    )
}