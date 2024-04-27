import { useState } from 'react';

import { Alert, BottomSheet, Button, Confirm } from '.';

const App = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsBottomSheetOpen(true)}>Bottom Sheet</Button>

      <BottomSheet
        isOpen={isBottomSheetOpen}
        onClose={() => setIsBottomSheetOpen(false)}
      >
        <Button onClick={() => setIsAlertOpen(true)}>Alert</Button>
        <Button onClick={() => setIsConfirmOpen(true)}>Confirm</Button>
      </BottomSheet>
      <Alert
        isOpen={isAlertOpen}
        onClose={() => setIsAlertOpen(false)}
        content="alert"
      />
      <Confirm
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        content="confirm"
      />
    </>
  );
};

export default App;
