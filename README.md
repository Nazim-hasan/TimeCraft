# Time Craft
A React Native App for tracking your daily task

https://github.com/Nazim-hasan/TimeCraft/assets/77955141/b6c35530-4570-4cdc-81ad-38aa22b694fd


## How to run application:

First of all, you should have installed `node.js ( >= 18 / latest )`, `watchman ( latest version )`, `XCode`, and `cocoapods` for `android` make sure you have installed `ndkVersion (2518937393)`.



### Prerequisites
1. Install [Node.js](https://nodejs.org/en/download/)
2. Install [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
6. Install [Android Studio](https://developer.android.com/studio) 
7. Install [Xcode](https://developer.apple.com/xcode/)


**To run application**


- Clone project to your local machine
- Go to the project folder:
```
yarn install
```
5. Install pod for iOS build
```
cd ios && pod install
```
6. Run
```
yarn start
```

# Arhictecture

```
# Application

# -----------------------------------------------------------------
# SCOPE: shared
# Contains libraries that can be consumed by
# - apps: all apps
# - libs: all libs
# -----------------------------EXAMPLE------------------------------------
/libs/shared/data-access ---> contains services and utility code related to state management
/libs/shared/ui ---> contains only presentational components (in other words - UI kit)
/libs/shared/types ---> contains common interfaces, enums, constants
/libs/shared/utils ---> contains common utilities and services used by other libraries and applications
/libs/shared/*domain ---> contains libraries, that are related to this domain ( data-access, feature, util, UI )


# -----------------------------------------------------------------
## Directory structure
timecraft/
├─ assets/
│  ├─ animated/
│  ├─ fonts/
│  ├─ icons/
│  ├─ images/
├─ node_modules/
├─ app/
│  ├─ components/ ---> contains all components here
│  ├─ constants/ ---> contains all fixed rules here
│  ├─ layout/ ---> contains all screen layout options
│  ├─ libs/ ---> Contains libraries that can be consumed by timecraft
│  ├─ models/ ---> Contains navigation models
│  ├─ navigation/ ---> All navigation modules
│  ├─ screens/ ---> All screen here
│  ├─ services/ ---> Contains auth, helper, hooks modules
│  ├─ storage/ ---> Access to native storage of mobile
│  ├─ theme/ ---> all design principle 
├─ README.md
```

### Library types:

- `data-access`: contains services and utilities code related to state management
 - `file`: contains access to the file system

### An application:

- can be built into a deployable artifact
- contains a configuration for its build process
- can consume code from libraries

### A library:

- contains code that can be consumed by applications or other libraries
- contains a configuration for runnings its tests
- can consume code from other libraries
- contains domain based features ( DDL )


