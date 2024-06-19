import { TableKeys } from "libs/shared/types/enums/table.enum";
import { ISwitchTabSelectorOption } from "libs/shared/types/interfaces/switchTabSelector.interface";

export const TodoSwitchTabOptions: ISwitchTabSelectorOption[] =
  [
    {
      label: "To Do",
      value: TableKeys.todo,
      testID: 'switch-sell',
      accessibilityLabel: 'switch-sell',
      // screenGuideText: t('secondaryMarket.guideSteps.sellTab'),
    },
    {
      label: "Done",
      value: TableKeys.done,
      testID: 'switch-listed-for-sell',
      accessibilityLabel: 'switch-listed-for-sell',
      // screenGuideText: t('secondaryMarket.guideSteps.listedForSaleTab'),
    }
  ];
