/**props tells component to expect children, in our App.jsk the Layout has children */
export default function Layout(props){

    /**destructure the children from props */
    const {children} = props
    
    /**So code is cleaner, jsx injects the html assigned via these const
     * and injects it to where {header} or {footer} is.
     */
    const header = (
    <header>
       <h1 className="text-gradient">Workout Program</h1>
       <p><strong>A 30 Simple Workouts Training Planner</strong></p> 
    </header>
    )
    const footer = (
    <footer>
        <p>Built by
            <a target="_blank" href=""> James Walter Wright</a>
            <br/>Styled with{' '} 
            <a target="_blank" href="https://www.fantacss.smoljames.com/">FantaCSS</a>
        </p>
    </footer>
    )

    return (
        <>
        {header}
        {children}
        {footer}
        </>
    )
}