# Features

This covers the classes that are added when installed.

## Scaling System
The scaling system is applied to all relavent options inside the tailwind system.
It can be adressed by its lk prefix. For example padding-lk-sm will result in the correct scale.
The math works as follows:
 let B = base value to which the system scales.
 let P = the power this is raised to.
 in B^P = value;
positive values result in order of magnitude high numbers.
negative results in sqrt values smaller than the original.

|class| value | B | P |
| - | - | - | - |
| 2xs | 0.236082 | 1.618 | -3 |
| xs |0.381982| 1.618 | -2 |
| sm | 0.618046 | 1.618 | -1 |
| md | 1 | 1.618 | 0 |
| lg | 1.618 | 1.618 | 1 |
| xl | 2.617924 | 1.618 | 2 |
| 2xl | 4.235801 | 1.618 | 3 |

## Typography
|   class   |   Default Weight Class  | Emphasized Weight Class |   Size Class    |   Line Height |   Letter Spacing  |
|   -----   |   ------  | ----------------- |   ---     |   ----------- |   --------------  |
|**text-display-1**|font-normal|font-bold|4.235em|1.129|-0.022|
|**text-display-2**|font-normal|font-bold|2.618em|1.272|-0.0|
|**text-title-1**|font-normal|font-bold|2.058em|1.272|-0.0|
|**text-title-2**|font-normal|font-semibold|1.618em|1.272|-0.02|
|**text-title-3**|font-normal|font-semibold|1.272em|1.272|-0.017|
|**text-heading**|font-semibold|font-bold|1.129em|1.272|-0.014|
|**text-subheading**|font-normal|font-semibold|0.885em|1.272|-0.007|
|**text-body**|font-normal|font-semibold|1em|1.618|-0.011|
|**text-callout**|font-normal|font-semibold|0.943em|	1.272|-0.009|
|**text-label**|font-medium|font-bold|0.835|1.272em|-0.004|
|**text-caption**|font-normal|font-semibold|0.786em|1.272|-0.007|
|**text-overline**|font-normal|font-semibold|0.786em|1.272|0.0618|
