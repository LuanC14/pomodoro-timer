import { useFormContext } from "react-hook-form";
import { FormContainer, MinutesAmount, TaskInput } from "./styles";
import { useContext } from "react";
import { CyclesContext } from "../../contexts/CyclesContext";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        placeholder="De um nome para seu projeto"
        list="taskSuggestions"
        id="task"
        disabled={!!activeCycle}
        {...register("task")}
      />

      <datalist id="taskSuggestions">
        <option value="1" />
        <option value="2" />
        <option value="3" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmount
        placeholder="00"
        id="minutesAmount"
        type="number"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  );
}
