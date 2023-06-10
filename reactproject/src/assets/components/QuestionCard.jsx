function QuestionCard({question,response,update,userResponse}){
    console.log(userResponse);
    return(
        <div className="QuestionCard">
            <p>{question}</p>
           <ul>
             {Object.keys(response).map((item) =>
               <li><input type="checkbox" onChange={(e)=> {
                if(e.target.checked){
                    userResponse = userResponse?[...userResponse,item] : [item]
                }
                else{
                    if(userResponse.includes(e)){
                        userResponse = userResponse?.filter((eve)=> eve != e)
                    }
                }
                update(question,userResponse)}}  id=""/><span>{e}</span></li>
              )}
           </ul>
        </div>
    )
}

export default QuestionCard