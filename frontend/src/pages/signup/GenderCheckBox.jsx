

const GenderCheckBox = ({checkBoxChange, selectedGender}) => {
  return (
    <div className="flex">

      <div className="form-control">
  <label className={`label cursor-pointer gap-2
  ${selectedGender ==="male" ? "selected": ""}`} >
    <span className="label-text">Male</span> 

    <input type="checkbox"  className="checkbox"
    checked={selectedGender ==="male"}
    onChange={()=> checkBoxChange("male")} />
  </label>
</div>

<div className="form-control">
  <label className={`label gap-2 cursor-pointer
  ${selectedGender ==="female" ? "selected": ""} `}>
    <span className="label-text">Female</span> 

    <input type="checkbox"  className="checkbox" 
    checked={selectedGender ==="female"}
    onChange={()=> checkBoxChange("female")} />
  </label>
</div>

    </div>
  )
}

export default GenderCheckBox
