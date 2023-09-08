# RMacDocker

A container similar to a Mac desktop effect.

## Docker

The Mac container will give you a layout effect similar to that of a Mac. You only need to worry about writing the contents of the main window.

Just like that, you can define your own 'RMacDockerItem' and you can customize some style parameters.

<preview path="../../../examples/docker/RMacDocker.vue" />


## Slots

| Slot name | Description                                         | Default | Required |
| :-------- | --------------------------------------------------- | ------- | -------- |
| main      | Main content display                                | —       | No       |
| default   | The default slot is shown in the bottom Item        | —       | No       |
| control   | The bottom controls the display of the Item content | —       | No       |

## RMacDocker Attribute

| Attribute           | Description                                                  | Type                     | Default | Required |
| ------------------- | ------------------------------------------------------------ | ------------------------ | ------- | -------- |
| *driverNums*        | If the number of items at the bottom exceeds the change number, the Control Item will be generated automatically | `number`                 | 4       | No       |
| *driverEffectWidth* | The lateral distance affected by the curve function          | `number`                 | 400     | No       |
| *driverMaxI*        | Longitudinal proportion of curve function (based on SIN function) | `number`                 | 2       | No       |
| *autoDriver*        | Whether control items are set automatically when there is no Control slot. | `booleab`                | true    | No       |
| *autoHidden*        | Whether to automatically hide the bottom navigation items    | `boolean`                | false   | No       |
| *autoHidenTimer*    | Automatic shadow hiding time, ms                             | `number`                 | 3000    | No       |
| *cssVars*           | Set CSS Var for the component                                | `Record<string, string>` | {}      | No       |

## RMacDockerItem Attribute

| Attribute | Description                                     | Type     | Default | Required |
| --------- | ----------------------------------------------- | -------- | ------- | -------- |
| *src*     | The value of the image link for the bottom Item | `string` | —       | Yes      |
| text      | The text value displayed by the bottom Item     | `string` | ‘’      | No       |

## CSS Variables

| Variable                             | Description                                                  | Default                                                      |
| ------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| --r-mac-docker-main-background       | Background image of the entire viewport                      | url(<a target="_blank" href='https://images.unsplash.com/photo-1682685797769-481b48222adf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'>...</a>)  //太长了我链接显示 |
| --r-mac-docker-divider-line-style    | Split line style, split content into normal and Control items | 3px solid rgba(255, 255, 255, .5)                            |
| --r-mac-docker-bottom                | docker for the bottom of the positioning pixel value         | 40px                                                         |
| --r-mac-docker-box-reflect-distance  | The distance corresponding to the bottom reflection          | 10px                                                         |
| --r-mac-docker-box-reflect-direction | The direction of the bottom reflection                       | below                                                        |
| --r-mac-docker-box-reflect-gradlient | The gradient of the bottom reflection                        | linear-gradient(bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.05) 100%) |
| --r-mac-docker-padding-lr            | The top-left rounded corner attribute of each item           | 30px                                                         |
| --r-mac-docker-padding-tb            | The bottom-right rounded corner attribute of each item       | 15px                                                         |
| --r-mac-docker-radius                | Rounded corners of docker containers                         | 35px                                                         |
| --r-mac-docker-bg                    | docker background color                                      | rgba(255, 255, 255, 1)                                       |
| --r-mac-docker-bg-blur               | The blur value of the docker background, used to make the frosted glass effect | 64px                                                         |
| --r-mac-docker-hidden-bg             | docker's background color after shading                      | linear-gradient(*to* right, blue, red)                       |
| --r-mac-docker-item-size             | The default size of each item                                | 45px                                                         |
| --r-mac-docker-item-radius           | Rounded corners for each item                                | 50% 35%                                                      |
| --r-mac-docker-item-padding          | padding and padding values for each item                     | 12px                                                         |
| --r-mac-docker-item-margin           | The space between the left and right of each item, the parent container is flex-decorated, and the value is gap | 20px                                                         |
| -r-mac-docker-item-margin-bottom     | The bottom distance of each item. This property will interact with the 'driverMaxI' of the curve function | 15px                                                         |

## Export Api

| Function name          | Description                          | Type                               | Notes                                                  |
| ---------------------- | ------------------------------------ | ---------------------------------- | ------------------------------------------------------ |
| *rSetMacDockerCssVar*  | Set CSS variables to Docker          | `(string) => void`                 | :warning:Call it when the component is already mounted |
| *rSetMacDockerCssVars* | Set multiple CSS variables to Docker | `(Record<string, string>) => void` | :warning:Call it when the component is already mounted |

:::warning

Part of the Api needs to be used in the 'onMounted' Vue lifecycle

:::
