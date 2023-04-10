import './TopNav.css'

interface TopNavProps {
    onThemeToggle: Function;
    currentTheme: 'light-mode' | 'dark-mode'
}

export default function TopNav(props: TopNavProps) {
    return <div className="TopNav">
        <div className='TopNavLeft'>
            Where in the world?
        </div>
        <div className='TopNavRight' onClick={() => props.onThemeToggle()}>
            {props.currentTheme === 'dark-mode' && <img src="src\assets\moon-dark.svg" alt="Dark mode icon" />}
            {props.currentTheme === 'light-mode' && <img src="src\assets\moon-white.svg" alt="Light mode icon" />}
           <span style={{} }>Dark Mode</span> 
        </div>
    </div>
}
     