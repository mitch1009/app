export const UserListCard = () => {
    const userData = [
        {
            name: "Sapho",
            email: "sapho@gmmail.com",
            amount: 400,
            image: "https://avatars.githubusercontent.com/u/130461824?v=4"
        },
        {
            name: "Mitch",
            email: "mitch@gmmail.com",
            amount: 100,
            image: "https://avatars.githubusercontent.com/u/66210356?v=4"
        },
        {
            name: "Sapho",
            email: "sapho@gmmail.com",
            amount: 400,
            image: "https://avatars.githubusercontent.com/u/130461824?v=4"
        },
        {
            name: "Mitch",
            email: "mitch@gmmail.com",
            amount: 100,
            image: "https://avatars.githubusercontent.com/u/66210356?v=4"
        }
    ];
    return <>
        <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
                <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                    View all
                </a>
            </div>
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    {
                        userData.map((user, index) => {
                            return <li key={index} className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img className="w-8 h-8 rounded-full" src={user.image} alt="Neil image" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            {user.name}
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            {user.email}
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        ${user.amount}
                                    </div>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    </>
}
