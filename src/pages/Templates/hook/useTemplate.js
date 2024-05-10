import { useImmer } from 'use-immer'
import { successMessage } from '../../../utils';

export const useTemplate = ({ load = false }) => {
  const [newMileStone, setNewMileStone] = useImmer(false)
  const [Task, setTask] = useImmer(false)
  const [milestoneList, setMilestoneList] = useImmer(false);
  const onToggleMilestoneModal = (value) => {
       setNewMileStone(value);
     };
  const onToggleTask = (value) => {
    setTask(value);
     };
  const onToggleMilestoneList = (value) => {
    setMilestoneList(value);
  };
    return {
      newMileStone,
      onToggleMilestoneModal,
      Task,
      onToggleTask,
      milestoneList,
      onToggleMilestoneList,
    };
}
