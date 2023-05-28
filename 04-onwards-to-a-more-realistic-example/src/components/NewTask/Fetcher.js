const userFetcher = (props) => {
   
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    
      setIsLoading(true);
      setError(null);
      try {
        if(props.reqType==='post'){
          async=()=>{async=()=>{
        const response = await fetch(
          props.url,
          {
            method: "POST",
            body: JSON.stringify({ text: taskText }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        }}}
        else if(props.reqType==='get'){
            const response = await fetch(
               props.url
              );
            
        
        }
  
        if (!response.ok) {
          throw new Error("Request failed!");
        }
  
        const data = await response.json();
  
        const generatedId = data.name; // firebase-specific => "name" contains generated id
        const createdTask = { id: generatedId, text: taskText };
  
        props.onAddTask(createdTask);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      }
      setIsLoading(false);
  }
  
    return (
      <Section>
        <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
        {error && <p>{error}</p>}
      </Section>
    );
  




};
export default userFetcher;
