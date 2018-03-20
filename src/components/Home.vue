<template>
    <q-layout ref="layout" view="hHr LpR lFf" :right-breakpoint="1100">
        <q-toolbar slot="header">
            <q-btn flat @click="$refs.layout.toggleLeft()">
                <q-icon name="menu"/>
            </q-btn>

            <q-toolbar-title>
                Layout Header
                <span slot="subtitle">Optional subtitle</span>
            </q-toolbar-title>
        </q-toolbar>

        <div slot="left">
            <q-list no-border link inset-separator>
                <q-list-header>Essential Links</q-list-header>

                <div v-for="link in links" :id="`tour-step-${link.label}`">
                    <q-side-link item :to="link.to">
                        <q-item-side :icon="link.icon"/>
                        <q-item-main :label="link.label" :sublabel="link.sublabel"/>
                        <v-tour name="sampleTour" :steps="steps">
                            <template slot-scope="tour">
                                <q-popover
                                    v-for="(step, index) in tour.steps"
                                    :value="tour.currentStep === index"
                                    :key="index"
                                >
                                    <q-card flat>
                                        <q-card-title>
                                            {{ step.header.title }}
                                        </q-card-title>
                                        <q-card-main>
                                            {{ step.content }}
                                        </q-card-main>
                                        <q-card-actions>
                                            <q-btn
                                                flat
                                                color="primary"
                                                @click="tour.stop"
                                                v-if="!tour.isLast"
                                            >
                                                Skip tour
                                            </q-btn>
                                            <q-btn
                                                flat
                                                color="primary"
                                                @click="tour.previousStep"
                                                v-if="!tour.isFirst"
                                            >
                                                Previous
                                            </q-btn>
                                            <q-btn
                                                flat
                                                color="primary"
                                                @click="tour.nextStep"
                                                v-if="!tour.isLast"
                                            >
                                                Next
                                            </q-btn>
                                            <q-btn
                                                flat
                                                color="primary"
                                                @click="tour.stop"
                                                v-if="tour.isLast"
                                            >
                                                Finish
                                            </q-btn>
                                        </q-card-actions>
                                    </q-card>
                                </q-popover>
                            </template>
                        </v-tour>
                    </q-side-link>
                </div>
            </q-list>
        </div>

        <router-view/>
    </q-layout>
</template>

<script>
    import {
        QLayout,
        QToolbar,
        QToolbarTitle,
        QList,
        QItem,
        QSideLink,
        QItemMain,
        QItemSide,
        QListHeader,
        QBtn,
        QIcon,
        QCard,
        QCardTitle,
        QCardMain,
        QCardActions,
        QPopover,
    } from 'quasar';
    import Shepherd from 'tether-shepherd';

    export default {
        name: 'Home',

        components: {
            QLayout,
            QToolbar,
            QToolbarTitle,
            QList,
            QItem,
            QSideLink,
            QItemMain,
            QItemSide,
            QListHeader,
            QBtn,
            QIcon,
            QCard,
            QCardTitle,
            QCardMain,
            QCardActions,
            QPopover,
        },

        data() {
            return {
                links: [
                    {to: '/docs', icon: 'school', label: 'Docs', sublabel: 'quasar-framework.org'},
                    {to: '/forum', icon: 'record_voice_over', label: 'Forums', sublabel: 'forum.quasar-framework.org'},
                    {to: '/chat', icon: 'chat', label: 'Chat', sublabel: 'Quasar Lobby'},
                    {to: '/twitter', icon: 'rss feed', label: 'Twitter', sublabel: '@quasar-framework'},
                ],
                steps: [
                    {
                        target: '[data-v-step="Docs"]',
                        header: {
                            title: 'Docs'
                        },
                        content: 'This is the Docs page',
                    },
                    {
                        target: '[data-v-step="Forums"]',
                        header: {
                            title: 'Forums',
                        },
                        content: 'This is the Forums page',
                    },
                    {
                        target: '[data-v-step="Chat"]',
                        header: {
                            title: 'Chat',
                        },
                        content: 'This is the Chat page',
                    },
                    {
                        target: '[data-v-step="Twitter"]',
                        header: {
                            title: 'Twitter',
                        },
                        content: 'This is the Twitter page',
                    },
                ]
            };
        },

        mounted() {
            const tour = new Shepherd.Tour();
            tour.addStep('Docs', {
                text: 'This is the Docs page',
                attachTo: '#tour-step-Docs',
                buttons: [
                    {
                        text: 'Next',
                        action: tour.next
                    }
                ]
            });
            tour.start();
        }
    };
</script>

<style>
</style>
