// Basic Error Handler
class ExpressError extends Error {
    constructor(message, status) {
        super();
        this.message = message;
        this.status = status;
    }
}

// 404 Error Handler
class NotFoundError extends ExpressError {
    constructor (message = 'Not Found') {
        super(message, 404);
    }
}

// 401 Unauthorized Error Handler
class UnauthorizedError extends ExpressError {
    constructor (message = 'Unauthorized') {
        super(message, 401);
    }
}

// 400 Bad Request Error Handler
class BadRequestError extends ExpressError {
    constructor (message = 'Bad Request') {
        super(message, 400);
    }
}

module.exports = { ExpressError, NotFoundError, UnauthorizedError, BadRequestError };