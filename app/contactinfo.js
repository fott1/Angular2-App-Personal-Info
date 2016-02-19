System.register([], function(exports_1) {
    var ProfileInfo;
    return {
        setters:[],
        execute: function() {
            ProfileInfo = (function () {
                function ProfileInfo(description, reason, id, name) {
                    this.description = description;
                    this.reason = reason;
                    this.id = id;
                    this.name = name;
                }
                return ProfileInfo;
            })();
            exports_1("ProfileInfo", ProfileInfo);
        }
    }
});
//# sourceMappingURL=contactinfo.js.map