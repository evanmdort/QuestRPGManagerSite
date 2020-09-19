
export const updateQuestTitle = (quest,newName) => {
    return(dispatch, getState, {getFirebase, getFirestore}) =>{
        const firestore = getFirestore();
        var newQuest = firestore.collection("quests").doc(quest.id)
        console.log(quest)
        console.log(newName.quest_title)
           
        newQuest.update({
            
            quest_title: newName.quest_title

            }).then(() =>{
                dispatch({type:'UPDATE_QUEST_TITLE', quest})
            }).catch((err) => {
                dispatch({ type: 'UPDATE_QUEST_TITLE_ERR', err})
            })
        
    }
};