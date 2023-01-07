import { menuIcon } from "../../assets/icons";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui/uiSlice"

const PageTitle = () => {

  const dispatch = useDispatch()
  
  
  return (
    <div className="flex items-center">
        <div onClick={() => dispatch(uiActions.changeMenuDisplay()) }>
          {menuIcon('w-7 lg:hidden cursor-pointer pt-1')}
        </div>
        <h2 className="font-bold lg:text-2xl md:text-xl pl-2 tracking-wide text-gray-800">test</h2>
      </div>
  )
}

export default PageTitle