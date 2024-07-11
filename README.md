
# PHARMACY MANAGEMENT SYSTEM

## DESCRIPTION
Pharmacy Management System helps manage pharmaceutical process and records allowing for easy retrieval of the records and easier information gathering to drive decision making

## PROJECT SETUP
1. Clone the repository
```bash
git clone https://github.com/ElvisMwitari/tari_pms.git
cd tari_pms
```
2. Install the dependencies
Install backend dependencies
```bash
npm run install-backend
```

Install frontend dependencies
```bash
cd breeze-next
npm install --force
```
3. Set up environment variables
```bash
mv .env.example .env.local
cd ..
mv .env.example .env
```

4. Run migrations
```bash
php artisan migrate:fresh --seed --seeder=RoleSeeder
php artisan migrate:seed
```

5. Run it
Open two seperate terminal instances and in one run:
```bash
npm run start-backend
```

In the other instance run:
```bash
cd breeze-next
npm run dev
```



## DEPENDENCIES
Inorder to run this project you need to install the following dependencies
1. [npm](https://www.npmjs.com/)
2. [chakra-ui](https://v2.chakra-ui.com/)
3. [react-icons](https://react-icons.github.io/react-icons/)
4. [swr](https://swr.vercel.app/)

To install the above dependencies and others run the following command:
```bash
npm i --force
```

## REPOSITORY
Clone this github project to run the application
```bash
    git clone https://github.com/ElvisMwitari/tari_pms.git
    cd tari_pms
```
___

## PROJECT STRUCTURE
The structure below describes the main structure of the applicatiomn
```
├── app
│   ├── Http
│   │   ├── Controllers
│   │   │   ├── Api
│   │   │   │   └── V1
│   │   │   │       └── SupplierController.php // Manages supplier-related API operations
│   │   │   ├── Auth
│   │   │   │   ├── AuthenticatedSessionController.php // Handles user authentication sessions
│   │   │   │   ├── ConfirmablePasswordController.php // Manages password confirmation
│   │   │   │   ├── EmailVerificationNotificationController.php // Sends email verification notifications
│   │   │   │   ├── EmailVerificationPromptController.php // Prompts for email verification
│   │   │   │   ├── NewPasswordController.php // Manages setting new passwords
│   │   │   │   ├── PasswordController.php // Handles password updates
│   │   │   │   ├── PasswordResetLinkController.php // Manages password reset links
│   │   │   │   ├── RegisteredUserController.php // Manages user registration
│   │   │   │   └── VerifyEmailController.php // Handles email verification
│   │   │   ├── Controller.php // Base controller class
│   │   │   ├── MedicineController.php // Manages medicine-related operations
│   │   │   ├── PrescriptionController.php // Manages prescription-related operations
│   │   │   ├── ProfileController.php // Manages user profile operations
│   │   │   ├── RoleController.php // Manages role-related operations
│   │   │   └── UserController.php // Manages user-related operations
│   │   ├── Middleware
│   │   │   └── EnsureEmailIsVerified.php // Middleware to ensure email is verified
│   │   ├── Requests
│   │   │   ├── Auth
│   │   │   │   └── LoginRequest.php // Validates login requests
│   │   │   ├── ProfileUpdateRequest.php // Validates profile update requests
│   │   │   ├── StoreMedicineRequest.php // Validates requests to store medicine
│   │   │   ├── StorePrescriptionRequest.php // Validates requests to store prescriptions
│   │   │   ├── StoreRoleRequest.php // Validates requests to store roles
│   │   │   ├── StoreSupplierRequest.php // Validates requests to store suppliers
│   │   │   ├── UpdateMedicineRequest.php // Validates requests to update medicine
│   │   │   ├── UpdatePrescriptionRequest.php // Validates requests to update prescriptions
│   │   │   ├── UpdateRoleRequest.php // Validates requests to update roles
│   │   │   └── UpdateSupplierRequest.php // Validates requests to update suppliers
│   │   └── Resources
│   │       ├── MedicineResource.php // Transforms medicine data for API responses
│   │       ├── PrescriptionResource.php // Transforms prescription data for API responses
│   │       ├── SupplierResource.php // Transforms supplier data for API responses
│   │       └── UserResource.php // Transforms user data for API responses
│   ├── Models
│   │   ├── Medicine.php // Medicine model
│   │   ├── Prescription.php // Prescription model
│   │   ├── Role.php // Role model
│   │   ├── Supplier.php // Supplier model
│   │   └── User.php // User model
│   ├── Policies
│   │   ├── MedicinePolicy.php // Authorization policies for medicine
│   │   ├── PrescriptionPolicy.php // Authorization policies for prescriptions
│   │   ├── RolePolicy.php // Authorization policies for roles
│   │   └── SupplierPolicy.php // Authorization policies for suppliers
│   ├── Providers
│   │   └── AppServiceProvider.php // Registers application services
│   └── View
│       └── Components
│           ├── AppLayout.php // Layout for authenticated users
│           └── GuestLayout.php // Layout for guest users
├── artisan // Artisan command-line interface
├── breeze-next
│   ├── jsconfig.json // JavaScript configuration
│   ├── LICENSE.md // License information
│   ├── next-env.d.ts // TypeScript environment declarations
│   ├── package.json // Project metadata and dependencies
│   ├── package-lock.json // Locked versions of dependencies
│   ├── postcss.config.js // PostCSS configuration
│   ├── README.md // Project README
│   ├── RELEASE.md // Release notes
│   ├── src
│   │   ├── app
│   │   │   ├── (app)
│   │   │   │   ├── admin
│   │   │   │   │   ├── layout.tsx // Layout for admin pages
│   │   │   │   │   ├── medicine
│   │   │   │   │   │   ├── add
│   │   │   │   │   │   │   └── page.tsx // Page to add medicine
│   │   │   │   │   │   ├── administer
│   │   │   │   │   │   │   └── page.tsx // Page to administer medicine
│   │   │   │   │   │   └── page.tsx // Medicine list page
│   │   │   │   │   ├── page.tsx // Admin dashboard
│   │   │   │   │   ├── profile
│   │   │   │   │   │   └── page.tsx // Admin profile page
│   │   │   │   │   ├── settings
│   │   │   │   │   │   └── page.tsx // Admin settings page
│   │   │   │   │   ├── suppliers
│   │   │   │   │   │   ├── add
│   │   │   │   │   │   │   └── page.tsx // Page to add suppliers
│   │   │   │   │   │   └── page.tsx // Supplier list page
│   │   │   │   │   └── users
│   │   │   │   │       ├── create
│   │   │   │   │       │   └── page.tsx // Page to create users
│   │   │   │   │       └── page.tsx // User list page
│   │   │   │   ├── Header.js // Header component
│   │   │   │   ├── layout.js // Default layout component
│   │   │   │   ├── Loading.js // Loading component
│   │   │   │   ├── Navigation.js // Navigation component
│   │   │   │   └── test.tsx // Test component
│   │   │   ├── _app.js // Custom App component
│   │   │   ├── (auth)
│   │   │   │   ├── AuthCard.js // Authentication card component
│   │   │   │   ├── AuthSessionStatus.js // Displays authentication session status
│   │   │   │   ├── forgot-password
│   │   │   │   │   └── page.js // Forgot password page
│   │   │   │   ├── layout.js // Layout for auth pages
│   │   │   │   ├── login
│   │   │   │   │   └── page.js // Login page
│   │   │   │   ├── password-reset
│   │   │   │   │   └── [token]
│   │   │   │   │       └── page.js // Password reset page
│   │   │   │   ├── register
│   │   │   │   │   └── page.js // Registration page
│   │   │   │   └── verify-email
│   │   │   │       └── page.js // Email verification page
│   │   │   ├── global.css // Global CSS styles
│   │   │   ├── layout.js // Default layout component
│   │   │   ├── LoginLinks.js // Login links component
│   │   │   ├── not-found.js // 404 not found page
│   │   │   └── page.tsx // Default page
│   │   ├── components
│   │   │   ├── AnalyticsCard.js // Analytics card component
│   │   │   ├── ApplicationLogo.js // Application logo component
│   │   │   ├── Dropdown.js // Dropdown component
│   │   │   ├── DropdownLink.js // Dropdown link component
│   │   │   ├── InputError.js // Input error component
│   │   │   ├── Input.js // Input component
│   │   │   ├── Label.js // Label component
│   │   │   ├── NavLink.js // Navigation link component
│   │   │   └── ResponsiveNavLink.js // Responsive navigation link component
│   │   ├── hooks
│   │   │   └── auth.js // Authentication hooks
│   │   ├── lib
│   │   │   └── axios.js // Axios instance configuration
│   │   └── providers
│   │       ├── useMedicine.tsx // Custom hook for medicine-related operations
│   │       ├── useSuppliers.tsx // Custom hook for supplier-related operations
│   │       └── useUsers.tsx // Custom hook for user-related operations
│   ├── tailwind.config.js // Tailwind CSS configuration
│   └── tsconfig.json // TypeScript configuration
├── composer.json // Composer dependencies configuration
├── composer.lock // Locked versions of Composer dependencies
├── config
│   ├── app.php // Application configuration
│   ├── auth.php // Authentication configuration
│   ├── cache.php // Cache configuration
│   ├── cors.php // CORS configuration
│   ├── database.php // Database configuration
│   ├── filesystems.php // Filesystem configuration
│   ├── logging.php // Logging configuration
│   ├── mail.php // Mail configuration
│   ├── queue.php // Queue configuration
│   ├── sanctum.php // Sanctum configuration
│   ├── services.php // Services configuration
│   └── session.php // Session configuration
├── database
│   ├── database.sqlite // SQLite database file
│   ├── factories
│   │   ├── MedicineFactory.php // Factory for creating medicine instances
│   │   ├── PrescriptionFactory.php // Factory for creating prescription instances
│   │   ├── RoleFactory.php // Factory for creating role instances
│   │   ├── SupplierFactory.php // Factory for creating supplier instances
│   │   └── UserFactory.php // Factory for creating user instances
│   ├── migrations
│   │   ├── 0001_01_01_000000_create_users_table.php // Migration to create users table
│   │   ├── 0001_01_01_000001_create_cache_table.php // Migration to create cache table
│   │   ├── 0001_01_01_000002_create_jobs_table.php // Migration to create jobs table
│   │   ├── 2024_06_12_052448_create_personal_access_tokens_table.php // Migration to create personal access tokens table
│   │   ├── 2024_06_17_063727_create_suppliers_table.php // Migration to create suppliers table
│   │   ├── 2024_06_27_050738_create_roles_table.php // Migration to create roles table
│   │   ├── 2024_07_01_183559_create_user_roles_table.php // Migration to create user roles table
│   │   ├── 2024_07_03_093059_create_medicines_table.php // Migration to create medicines table
│   │   └── 2024_07_07_154327_create_prescriptions_table.php // Migration to create prescriptions table
│   └── seeders
│       ├── DatabaseSeeder.php // Base seeder class
│       ├── PrescriptionSeeder.php // Seeder for prescriptions
│       └── RoleSeeder.php // Seeder for roles
├── package.json // Project metadata and dependencies
├── package-lock.json // Locked versions of dependencies
├── phpunit.xml // PHPUnit configuration
├── postcss.config.js // PostCSS configuration
├── README.md // Project README
├── routes
│   ├── api.php // API routes
│   ├── auth.php // Authentication routes
│   ├── console.php // Console routes
│   └── web.php // Web routes
├── tailwind.config.js // Tailwind CSS configuration
└── tests
    ├── Feature
    │   ├── Auth
    │   │   ├── AuthenticationTest.php // Tests for authentication
    │   │   ├── EmailVerificationTest.php // Tests for email verification
    │   │   ├── PasswordResetTest.php // Tests for password reset
    │   │   ├── PasswordUpdateTest.php // Tests for password update
    │   │   └── RegistrationTest.php // Tests for registration
    │   ├── ExampleTest.php // Example feature test
    │   └── ProfileTest.php // Tests for profile
    ├── Pest.php // Pest testing configuration
    ├── TestCase.php // Base test case class
    └── Unit
        └── ExampleTest.php // Example unit test
```
## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The MIT License (MIT)

Copyright (c) 2024 Elvis Mwitari

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
