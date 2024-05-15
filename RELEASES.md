## Backstage releases

| Version | Sec | Setup                              |
|---------|-----|------------------------------------|
| 1.22.1  |     | `npx @backstage/create-app@0.5.10` |
| 1.22.0  | no  | `npx @backstage/create-app@0.5.9`  |
| 1.21.0  | no  | `npx @backstage/create-app@0.5.8`  |
| 1.20.0  | no  | `npx @backstage/create-app@0.5.7`  |
| 1.19.0  | YES | `npx @backstage/create-app@0.5.6`  |
| 1.18.0  | no  | `npx @backstage/create-app@0.5.5`  |
| 1.17.0  | no  | `npx @backstage/create-app@0.5.4`  |
| 1.16.0  | no  | `npx @backstage/create-app@0.5.3`  |
| 1.15.0  | YES | `npx @backstage/create-app@0.5.2`  |
| 1.14.0  | YES | `npx @backstage/create-app@0.5.1`  |
| 1.13.0  | YES | `npx @backstage/create-app@0.5.0`  |
| 1.12.0  | no  | `npx @backstage/create-app@0.4.38` |
| 1.11.0  | YES | `npx @backstage/create-app@???` |
| 1.10.0  | no  | `npx @backstage/create-app@???` |
| 1.9.0   | no  | `npx @backstage/create-app@???` |
| 1.8.0   | no  | `npx @backstage/create-app@???` |
| 1.7.0   | no  | `npx @backstage/create-app@???` |
| 1.6.0   | YES | `npx @backstage/create-app@???` |
| 1.5.0   | no  | `npx @backstage/create-app@???` |
| 1.4.0   | YES | `npx @backstage/create-app@???` |
| 1.3.0   | YES | `npx @backstage/create-app@???` |
| 1.2.0   | YES | `npx @backstage/create-app@???` |
| 1.1.0   | no  | `npx @backstage/create-app@???` |
| 1.0.0   | no  | `npx @backstage/create-app@???` |

## Backstage releases with security notes

| Version | Security notes |
|---------|----------------|
| 1.19.0  | some sensitive configuration settings could be seen by the browser, updated `lerna` package that is used in development |
| 1.15.0  | Scaffolder replacing `vm2` with `isolated-vm`, some sensitive configuration settings could be seen by the browser, updated Docker images |
| 1.14.0  | Scaffolder plugin: issue related to `vm2` |
| 1.13.0  | Scaffolder plugin: issue related to `vm2` |
| 1.11.0  | In `@backstage/core-components`, `@backstage/catalog-model`, and `@backstage/plugin-catalog-backend` |
| 1.6.0   | In `@backstage/plugin-scaffolder-backend` |
| 1.4.0   | In `@backstage/plugin-scaffolder-backend` |
| 1.3.0   | In `@backstage/plugin-scaffolder-backend` and `@backstage/plugin-techdocs-node` |
| 1.2.0   | In `@backstage/plugin-scaffolder-backend-module-rails` |
