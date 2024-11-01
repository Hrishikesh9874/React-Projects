import './ChangeMode.css';
import useLocalStorage from './useLocalStorege';

export default function ChangeMode(){

    const [theme, setTheme] = useLocalStorage('theme', 'dark');

    function handleToggleTheme(){
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return(
        <div className='light-dark-mode' data-theme={theme}>
            <div className='container'>
                <p>Hello World</p>
                <button onClick={handleToggleTheme}>Change Theme</button>
            </div>
        </div>
    )
}