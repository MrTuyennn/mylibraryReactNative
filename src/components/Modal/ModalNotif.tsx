import MyAlert from './MyAlert';

export const ModalNotif = (
  title?: string,
  description?: string,
  buttonLeft?: string,
  onPressButtonLeft?: () => void | null,
  buttonRight?: string,
  onPressButtonRight?: () => void | null,
) => {
  setTimeout(() => {
    MyAlert.show(
      title,
      description,
      buttonLeft,
      onPressButtonLeft,
      buttonRight,
      onPressButtonRight,
    );
  }, 300);
};
