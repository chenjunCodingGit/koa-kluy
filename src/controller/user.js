module.exports = {
    async getUser(ctx, service) {
        await service.userService.storeInfo();//开心的使用service
        ctx.body = 'getUser';
    },
    async getUserInfo(ctx) {
        ctx.body = 'getUserInfo';
    }
};