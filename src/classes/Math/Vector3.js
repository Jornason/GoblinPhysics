Goblin.Vector3 = function( x, y, z ) {
	this.x = x || 0;
	this.y = y || 0;
	this.z = z || 0;
};

Goblin.Vector3.prototype = {
	set: function( x, y, z ) {
		this.x = x;
		this.y = y;
		this.z = z;
	},

	copy: function( v ) {
		this.x = v.x;
		this.y = v.y;
		this.z = v.z;
	},

	add: function( v ) {
		this.x += v.x;
		this.y += v.y;
		this.z += v.z;
	},

	addVectors: function( a, b ) {
		this.x = a.x + b.x;
		this.y = a.y + b.y;
		this.z = a.z + b.z;
	},

	subtract: function( v ) {
		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;
	},

	subtractVectors: function( a, b ) {
		this.x = a.x - b.x;
		this.y = a.y - b.y;
		this.z = a.z - b.z;
	},

	multiply: function( v ) {
		this.x *= v.x;
		this.y *= v.y;
		this.z *= v.z;
	},

	multiplyVectors: function( a, b ) {
		this.x = a.x * b.x;
		this.y = a.y * b.y;
		this.z = a.z * b.z;
	},

	scale: function( scalar ) {
		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;
	},

	scaleVector: function( v, scalar ) {
		this.x = v.x * scalar;
		this.y = v.y * scalar;
		this.z = v.z * scalar;
	},

	lengthSquared: function() {
		return this.dot( this );
	},

	length: function() {
		return Math.sqrt( this.lengthSquared() );
	},

	normalize: function() {
		var length = this.length();
		if ( length === 0 ) {
			this.x = this.y = this.z = 0;
		} else {
			this.scale( 1 / length );
		}
	},

	normalizeVector: function( v ) {
		this.copy( v );
		this.normalize();
	},

	dot: function( v ) {
		return this.x * v.x + this.y * v.y + this.z * v.z;
	},

	cross: function( v ) {
		var x = this.x, y = this.y, z = this.z;

		this.x = y * v.z - z * v.y;
		this.y = z * v.x - x * v.z;
		this.z = x * v.y - y * v.x;
	},

	crossVectors: function( a, b ) {
		this.x = a.y * b.z - a.z * b.y;
		this.y = a.z * b.x - a.x * b.z;
		this.z = a.x * b.y - a.y * b.x;
	},

	distanceTo: function( v ) {
		var x = v.x - this.x,
			y = v.y - this.y,
			z = v.z - this.z;
		return Math.sqrt( x*x + y*y + z*z );
	}
};