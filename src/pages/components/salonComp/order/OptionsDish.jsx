
export const OptionsDish = ({ changeSelect, changeChecked1, stateExtra1, changeChecked2, stateExtra2 }) => {

  return (
    <div className="optionsOrder">
      <div className="optionOrder">
        <p className="description">Tipo:</p>

        <select
          name="typeBurguer"
          defaultValue={"default"}
          onChange={changeSelect}
        >
          <option value="default" disabled>
            Seleccione un tipo
          </option>

          <option value="carne">carne</option>
          <option value="pollo">pollo</option>
        </select>
      </div>

      <div className="extraOrder">
        <p className="description"> Extra: </p>
        <div className="extraOptions">
          <input
            type="checkbox"
            checked={stateExtra1}
            onChange={changeChecked1}
          />
          <label for="check1">Huevo</label>
        </div>
        <div className="extraOptions">
          <input
            type="checkbox"
            checked={stateExtra2}
            onChange={changeChecked2}
          />
          <label for="check1">Queso</label>

        </div>
      </div>
    </div>
  );
};