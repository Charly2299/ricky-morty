import Item from "./Item";

function List({ residents,setOpen,setModalData}) {
  return (
    /* [repeat(auto-fill,minmax(300px,1fr))] */
      <div className="w-[70vw] grid grid-cols-[repeat(auto-fill,minmax(300px,500px))] gap-4 justify-center  ">
         
        {residents?.map((r) => (
          
          
          <Item 
          setModalData={setModalData}
          setOpen={setOpen}
          key={r} url={r}> 
          
         
          </Item>
        ))}

        
      
      </div>
    
  );
}
///////
export default List;
