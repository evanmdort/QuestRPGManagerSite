export const addUserToQuest = (quest,newName) => {
    return(dispatch, getState, {getFirebase, getFirestore}) =>{
        const firestore = getFirestore();
        var newQuest = firestore.collection("quests").doc(quest.id)
           
        newQuest.update({
            }).then(() =>{
                dispatch({type:'UPDATE_QUEST_TITLE', quest})
            }).catch((err) => {
                dispatch({ type: 'UPDATE_QUEST_TITLE_ERR', err})
            })
        
    }
};