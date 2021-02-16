export enum GameState {
	BEFORE_USER_CREATE = 'BEFORE_USER_CREATE',
	USER_CREATED = 'USER_CREATED',
	BEFORE_USER_COMMAND = 'BEFORE_USER_COMMAND',
	USER_MOVED = 'USER_MOVED',
	OPENED_GOLDEN_KEY = 'OPENED_GOLDEN_KEY',
	BEFORE_FORCE_MOVE = 'BEFORE_FORCE_MOVE',
	TRAVEL_IN_SPACE = 'TRAVEL_IN_SPACE',
	TRADE_WITH_BANK = 'TRADE_WITH_BANK',
	GOT_MONEY_FROM_BANK = 'GOT_MONEY_FROM_BANK',
	PAID_MONEY_TO_BANK = 'PAID_MONEY_TO_BANK',
	TRADE_WITH_USER = 'TRADE_WITH_USER',
	BEFORE_END = 'BEFORE_END'
}

export enum foreclosuresValue {
	PAY_WELFARE = 150000,
	GOLDEN_KEY_FINE = 100000,
	GOLDEN_KEY_HALF_FINE = 50000,
	GOLDEN_KEY_HALF_REWARD = 50000,
	GOLDEN_KEY_REWARD = 100000,
	GOLDEN_KEY_TRIPPLE_REWARD = 300000,
}

export enum propertyType {
	VILLA = 'VILLA',
	BUILDING = 'BUILDING',
	HOTEL = 'HOTEL'
}
