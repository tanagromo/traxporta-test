<template>
  <div
    class="avatar"
    >
    <div
      :class="styles"
      class="avatar__picture"
      >
      <div class="avatar__image">
        <template v-if="user !== null && user.avatar && user.avatar !== ''">
          <img
            :src="user.avatar"
            :alt="user.name"
            >
        </template>
        <template v-else>
          <div>
            {{ abbreviationName || 'NA' }}
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppAvatar',
  props: {
    big: {
      type: Boolean,
      default: false
    },
    medium: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    tiny: {
      type: Boolean,
      default: false
    },
    user: {
      type: Object,
      default: () => ({
        avatar: '',
        name: ''
      })
    }
  },
  data () {
    return {
      
    }
  },
  computed: {
    abbreviationName () {
      const toDiscard = ['del', 'de', 'la', 'las', 'los']
      const name = this.user.name
      return name
        .split(' ')
        .filter(word => !toDiscard.includes(word))
        .slice(0, 2)
        .map(x => x[0])
        .join('')
        .toUpperCase()
    },
    styles () {
      return [
        (this.big) ? `avatar--big avatar-${this.abbreviationName[0]}` : '',
        (this.medium) ? `avatar--medium avatar-${this.abbreviationName[0]}` : '',
        (this.small) ? `avatar--small avatar-${this.abbreviationName[0]}` : '',
        (this.tiny) ? `avatar--tiny avatar-${this.abbreviationName[0]}` : ''
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.avatar {
  position: relative;
  display: inline-block;

  &__picture {
    overflow: hidden;
  }

  &__image {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    img {
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    div {
      color: #ffffff;
    }
  }

  &--big {
    width: 80px;
    height: 80px;
    font-size: 24px;
    border-radius: 8px;
  }

  &--medium {
    width: 40px;
    height: 40px;
    font-size: 18px;
    background: #e3e5e9;
    border-radius: 8px;
  }

  &--small {
    width: 32px;
    height: 32px;
    font-size: 12px;
    background: #e3e5e9;
    border-radius: 8px;
  }

  &--tiny {
    width: 24px;
    height: 24px;
    font-size: 12px;
    background: #e3e5e9;
    border-radius: 8px;
  }
}

.avatar-A,
.avatar-G,
.avatar-M,
.avatar-R,
.avatar-X {
  background: #0093ff;
}

.avatar-B,
.avatar-H,
.avatar-N,
.avatar-S,
.avatar-Y {
  background: #ff7474;
}

.avatar-W,
.avatar-I,
.avatar-Ñ,
.avatar-T,
.avatar-Z {
  background: #12d385;
}

.avatar-D,
.avatar-J,
.avatar-P,
.avatar-U {
  background: #ce54eb;
}

.avatar-E,
.avatar-K,
.avatar-O,
.avatar-V {
  background: #ff5151;
}

.avatar-F,
.avatar-L,
.avatar-Q,
.avatar-C {
  background: #ffb500;
}
</style>
