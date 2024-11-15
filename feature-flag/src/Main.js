import ChangeMode from './Components/LightAndDarkMode/ChangeMode';
import Accordian from './Components/Accordian/Accordian';
import Random from './Components/RandomColorGenerator/Random';
import Game from './Components/TikTacToe/Game';
import TreeView from './Components/TreeView/TreeView';
import { useContext } from 'react';
import { FeatureFlagsContext } from './context';
import treeViewData from './Components/TreeView/data';



export default function Main(){

    const {loading, enabledFlags} = useContext(FeatureFlagsContext);

    const componentsToRender = [
        {
            key: 'showLightAndDarkMode',
            component: <ChangeMode/>
        },
        {
            key: 'showTikTacToeBoard',
            component: <Game></Game>
        },
        {
            key: 'showRandomColorGenerator',
            component: <Random></Random>
        },
        {
            key: 'showAccordian',
            component: <Accordian></Accordian>
        },
        {
            key: 'showTreeView',
            component: <TreeView menus={treeViewData}></TreeView>
        }
    ]

    function checkEnabledFlags(getCurrentKey){
        return enabledFlags[getCurrentKey];
    }

    if(loading) <h1>Loading data! Please wait</h1>

    return(
        <div>
            <h1>Feature Flags</h1>
        {
            componentsToRender.map((componentItem)=> checkEnabledFlags(componentItem.key) ? componentItem.component : null)
        }
        </div>
    )
}