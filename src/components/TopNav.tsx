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
            {props.currentTheme === 'dark-mode' && <img src="" alt="" />}
            {props.currentTheme === 'light-mode' && <img src="" alt="" />}
            Dark Mode
        </div>
    </div>
}
